<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Redis::get('tasks');

        if (!$tasks) {
            $tasks = Task::all();
            Redis::set('tasks', $tasks->toJson());
        } else {
            $tasks = json_decode($tasks, true);
        }

        return Inertia::render('Welcome', [
            'tasks' => $tasks,
        ]);
    }

    public function show($id)
    {
        $tasks = Task::all();
        $task = Task::find($id);

        return Inertia::render('TaskPage', [
            'tasks'=>$tasks,
            'task' => $task,
        ]);
    }

    public function create()
    {
        return Inertia::render('Create');
    }

    public function store(Request $request)
    {
        $task = new Task;
        $task->title = $request->title;

        if ($request->has('text')) {
            $task->text = $request->text;
        }

        if ($request->has('deadline')) {
            $task->deadline = $request->deadline;
        }

        $task->active = false;

        $task->save();

        $this->updateTaskCache();

        return to_route('task.index');
    }

    public function edit(int $id)
    {
        $task = Task::find($id);

        return Inertia::render('Edit', ['task' => $task]);
    }

    public function update(int $id, Request $request)
    {
        $task = Task::find($id);

        if ($request->has('title')) {
            $task->title = $request->title;
        }

        if ($request->has('text')) {
            $task->text = $request->text;
        }

        if ($request->has('deadline')) {
            $task->deadline = $request->deadline;
        }

        if ($request->has('active')) {
            $task->active = $request->active;
        }

        $task->save();

        $this->updateTaskCache();

        return back();
    }

    public function destroy(int $id)
    {
        $task = Task::find($id);
        $task->delete();

        $this->updateTaskCache();

        return to_route('task.index');
    }

    public function updateTaskCache()
    {
        $tasks = Task::all();
        Redis::set('tasks', $tasks->toJson());
    }
}
