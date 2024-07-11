<?php

use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function () {
    Route::get('/update-cache', function () {
       \Illuminate\Support\Facades\Redis::set('tasks', \App\Models\Task::all()->toJson());

        return redirect()->route('task.index');
    });
});
