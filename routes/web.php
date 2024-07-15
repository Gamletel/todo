<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TaskController::class, 'index'])->name('task.index');
Route::get('/task/{id}', [TaskController::class, 'show'])->name('task.show');
Route::get('/task/create', [TaskController::class, 'create'])->name('task.create');
Route::post('/task/store', [TaskController::class, 'store'])->name('task.store');
Route::get('/task/{id}/edit', [TaskController::class, 'edit'])->name('task.edit');
Route::patch('/task/{id}/update', [TaskController::class, 'update'])->name('task.update');
Route::delete('/task/{id}/delete', [TaskController::class, 'destroy'])->name('task.delete');

require __DIR__.'/auth.php';
require __DIR__.'/api.php';
