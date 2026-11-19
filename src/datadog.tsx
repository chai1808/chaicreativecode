import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';

datadogRum.init({
    applicationId: 'cb361d81-fc3a-46b4-b16c-8613ef4ad56b',
    clientToken: 'pub4fd9f0231b3215be4eeb765f7c63c34b',
    site: 'ap1.datadoghq.com',
    service: 'Chai Creative Code Portfolio',
    env: import.meta.env.MODE,				// e.g. 'prod', 'staging-1', 'dev'
    version: '1.0.0',	// e.g. '1.0.0'
    sessionSampleRate: 100,			// capture 100% of sessions
    sessionReplaySampleRate: 20,	// capture 20% of sessions with replay
    trackResources: true,			// Enable Resource tracking
    trackUserInteractions: true,	// Enable Action tracking
    trackLongTasks: true,			// Enable Long Tasks tracking
    plugins: [reactPlugin({ router: false })],
});