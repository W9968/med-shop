<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factures', function (Blueprint $table) {
            $table->id();
            $table->string('transaction_id');
            $table->string('payment_methode');
            $table->double('amount_to_pay');
            $table->string('country');
            $table->string('state');
            $table->integer('postal_code');
            $table->string('phone_number');
            $table->string('line1');
            $table->string('line2')->nullable();
            $table->string('returnable');
            $table->timestamps();
            $table->foreignId('user_id')->constrained('users')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('factures');
    }
}
