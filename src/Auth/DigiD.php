<?php

declare(strict_types=1);
/**
 * Resolve entries from the DI-container.
 * @author  Yard | Digital Agency
 *
 * @since   1.0.0
 */

namespace OWC\My_Services\Auth;

class DigiD
{
    public static function make(): self
    {
        return new static();
    }

    public function bsn(): ?string
    {
        if ($bsn = $this->handle_digid_idp()) {
            return $bsn;
        }

        return null;
        ;
    }

    public function logged_in(): bool
    {
        if ($this->handle_digid_idp()) {
            return true;
        }

        return false;
    }

    private function handle_digid_idp(): ?string
    {
        if (! class_exists('\OWC\IdpUserData\DigiDSession')) {
            return null;
        }

        if (! \OWC\IdpUserData\DigiDSession::isLoggedIn()) {
            return null;
        }

        return \OWC\IdpUserData\DigiDSession::getUserData()?->getBsn();
    }
}
