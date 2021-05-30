<?php

namespace App\Providers;

use App\Models\ReturnPolicy;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        VerifyEmail::toMailUsing(function ($notifiable, $url) {
            return (new MailMessage)
            ->subject('Verify Email Adress') 
            ->line(Lang::get('Please click the button below to verify your email address.')) 
            ->action(Lang::get('Verify Email Address'), $url) 
            ->line(Lang::get('This verification link will expire after 60 minutes')) 
            ->line(Lang::get('If you did not create an account, no further action is required.'));
        });
    }
}
