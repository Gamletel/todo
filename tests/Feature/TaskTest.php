<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;
    /**
     * Create Test
     */
    public function test_task_create_with_all_fields(): void
    {
        $data = [
            'title' => 'Test Title',
            'text' => 'Test Description',
            'deadline' => '2024-12-31 00:00:00',
        ];

        $response = $this->post(route('task.store'), $data);

        $this->assertDatabaseHas('tasks', [
            'title' => 'Test Title',
            'text' => 'Test Description',
            'deadline' => '2024-12-31 00:00:00',
        ]);
    }

    /**
     * Create Test Without Title
     */
    public function test_task_create_without_title(): void
    {
        $data = [
            'text' => 'Test Description2',
            'deadline' => '2024-12-31 00:00:01',
        ];

        $response = $this->post(route('task.store'), $data);

        $this->assertDatabaseMissing('tasks', [
            'title' => 'Test Title2',
        ]);
    }

    /**
     * Create Test Without Text
     */
    public function test_task_create_without_text(): void
    {
        $data = [
            'title'=>'Test Title3',
            'deadline' => '2024-12-31 00:00:03',
        ];

        $response = $this->post(route('task.store'), $data);

        $this->assertDatabaseHas('tasks', [
            'title' => 'Test Title3',
            'deadline' => '2024-12-31 00:00:03',
        ]);
        $this->assertDatabaseMissing('tasks', [
            'text' => 'Test Description3',
        ]);
    }

    /**
     * Create Test Without Deadline
     */
    public function test_task_create_without_deadline(): void
    {
        $data = [
            'title'=>'Test Title4',
            'text' => 'Test Description4',
        ];

        $response = $this->post(route('task.store'), $data);

        $this->assertDatabaseHas('tasks', [
            'title' => 'Test Title4',
            'text' => 'Test Description4',
        ]);
        $this->assertDatabaseMissing('tasks', [
            'deadline' => '2024-12-31 00:00:04',
        ]);
    }
}
