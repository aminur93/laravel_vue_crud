<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'aminur',
            'email' => 'aminurrashid126@gmail.com',
            'password' => bcrypt('12345678'),
            'role' => 'admin'
        ]);
    }
}
