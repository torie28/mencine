<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    protected $fillable = [
        "first_name",
        "last_name",
        "email",
        "phone",
        "country",
        "waste_type",
        "operation_size",
        "details",
        "status",
        "submission_date",
    ];
}
