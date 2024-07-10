<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TaskController::class, 'index'])->name('task.index');
Route::get('/todo/create', [TaskController::class, 'create'])->name('task.create');
Route::post('/todo/store', [TaskController::class, 'store'])->name('task.store');

require __DIR__.'/auth.php';
