<?php

declare(strict_types=1);

use DI\Container;
use OWC\My_Services\Auth\DigiD;

return [
	/**
	 * Suppliers
	 */
	'suppliers' => [
		'openzaak' => 'OpenZaak',
		'decos-join' => 'DecosJoin',
		'rx-mission' => 'RxMission',
		'xxllnc' => 'Xxllnc',
		'procura' => 'Procura',
	],

	/**
	 * Specific client settings.
	 */
	'oz.enabled' => function (Container $container) {
		return (bool) $container->make('zgw.get-configured-client', [ 'openzaak' ]);
	},
	'oz.api-client-settings' => function (Container $container) {
		return $container->make('zgw.get-configured-client', [ 'openzaak' ]);
	},
	'xxllnc.enabled' => function (Container $container) {
		return (bool) $container->make('zgw.get-configured-client', [ 'xxllnc' ]);
	},
	'xxllnc.api-client-settings' => function (Container $container) {
		return $container->make('zgw.get-configured-client', [ 'xxllnc' ]);
	},
	'dj.enabled' => function (Container $container) {
		return (bool) $container->make('zgw.get-configured-client', [ 'decosjoin' ]);
	},
	'dj.api-client-settings' => function (Container $container) {
		return $container->make('zgw.get-configured-client', [ 'decosjoin' ]);
	},
	'rx.enabled' => function (Container $container) {
		return (bool) $container->make('zgw.get-configured-client', [ 'rxmission' ]);
	},
	'rx.api-client-settings' => function (Container $container) {
		return $container->make('zgw.get-configured-client', [ 'rxmission' ]);
	},
	'procura.enabled' => function (Container $container) {
		return (bool) $container->make('zgw.get-configured-client', [ 'procura' ]);
	},
	'procura.api-client-settings' => function (Container $container) {
		return $container->make('zgw.get-configured-client', [ 'procura' ]);
	},

	/**
	 * Generic client settings.
	 */
	'zgw.get-configured-client' => function (Container $container, string $type, string $name) {
		$clients = $container->make('zgw.settings', [ 'zgw-api-configured-clients' ]) ?: [];
		$clients = array_filter(
			$clients,
			fn ($client) => $client['client_type'] === $name,
		);
		$client = reset($clients);

		return is_array($client) && 0 < count($client) ? $client : [];
	},
	'zgw.api-configured-clients' => function (Container $container) {
		return $container->make('zgw.settings', [ 'zgw-api-configured-clients' ]);
	},
	'zgw.settings' => function (Container $container, string $type, string $name) {
		return \OWC\My_Services\Settings\Settings::make()->get($name);
	},
	//'zgw.rsin' => '807287684', // @todo add rsin setting and use it here.
	'digid.current_user_bsn' => DigiD::make()->bsn(),
];
