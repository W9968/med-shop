<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        //customize the password reset link URL using the 
        //createUrlUsing method provided by the ResetPassword notification class. 
        ResetPassword::createUrlUsing(
            function ($notifiable, $token) {
                return 'http://localhost:3000/resetpassword?token='.$token.'&email='.$notifiable->getEmailForPasswordReset();
            }
        );
    }
}
