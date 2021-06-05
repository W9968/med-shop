@component('mail::message')
# An offer to never be missed

The body of your message.

<h1>{{$product}}</h1>

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
