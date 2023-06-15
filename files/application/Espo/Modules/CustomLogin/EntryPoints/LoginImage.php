<?php

namespace Espo\Modules\CustomLogin\EntryPoints;

use Espo\Core\Api\Request;
use Espo\Core\Api\Response;
use Espo\Core\EntryPoint\Traits\NoAuth;
use Espo\Core\Exceptions\NotFound;
use Espo\EntryPoints\Image;

class LoginImage extends Image
{
    use NoAuth;

    protected $allowedRelatedTypeList = ['Settings', 'Portal'];
    protected $allowedFieldList = ['CustomLoginBackground', 'CustomLoginPortalBackground'];

    public function run(Request $request, Response $response): void
    {
        $id = $request->getQueryParam('id');
        $size = $request->getQueryParam('size') ?? null;

        if (!$id) {
            $id = $this->config->get('CustomLoginBackgroundId');
        }

        if (!$id) {
            throw new NotFound();
        }

        $this->show($response, $id, $size);
    }
}