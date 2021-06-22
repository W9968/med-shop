<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use OwenIt\Auditing\Contracts\Auditable;
use OwenIt\Auditing\Auditable as AuditableTrait;

class Facture extends Model implements Auditable
{
    use HasFactory,  AuditableTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = "factures";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'transaction_id','payment_methode','amount_to_pay','country',
        'state', 'postal_code', 'phone_number', 'line1', 'line2','returnable',
        'user_id'
    ];

    /**
     * Get the user that owns the Facture
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get all of the orders for the Facture
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders(): HasMany
    {
        return $this->hasMany(Orders::class, 'facture_id', 'id');
    }

    /**
     * Get the stateorder associated with the Facture
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function stateorder(): HasOne
    {
        return $this->hasOne(Status::class, 'facture_id', 'id');
    }
}
