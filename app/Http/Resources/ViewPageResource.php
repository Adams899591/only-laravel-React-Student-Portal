<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ViewPageResource extends JsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = null; // this remove the default data wrapped that laravel normally come with

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            "name" => $this->name,
            "course" => $this->course,
            "email" => $this->email,
            "created_at" => $this->created_at->format("F d, Y h:i A"),
        ];
    }
}
