<?php

use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function () {
    Route::get('/update-cache', function () {
       \Illuminate\Support\Facades\Redis::set('tasks', \App\Models\Task::all()->toJson());

        return redirect()->route('task.index');
    });

//    Route::prefix('task')->group(function (){
//       Route::post('/store', function (\Illuminate\Support\Facades\Request $request){
//           $task = \App\Models\Task::class;
//           $task = $request
//           return json_decode();
//       });
//    });
});
