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

        return to_route('task.index');
    }
}
