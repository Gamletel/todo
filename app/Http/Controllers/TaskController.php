<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::all();

        return Inertia::render('Welcome', [
            'tasks' => $tasks,
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
        $task->text = $request->text;
        $task->active = false;

        $task->save();

        return Inertia::render('Welcome');
    }

    public function edit(int $id)
    {
        $task = Task::find($id);

        return Inertia::render('Edit',['task'=>$task]);
    }

    public function update(int $id, Request $request)
    {
        $task = Task::find($id);
        $task->title = $request->title;
        $task->text = $request->text;
        $task->active = $request->active;
        $task->save();

        return Inertia::render('Edit', ['task'=>$task]);
    }

    public function destroy(int $id)
    {
        $task = Task::find($id);
        $task->delete();

        return Inertia::render('Welcome', ['tasks'=>Task::all()]);
    }
}
