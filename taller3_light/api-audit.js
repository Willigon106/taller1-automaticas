'use strict';

const Audit = require('lighthouse').Audit;

const MAX_CARD_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
			id: '2',
			title: 'Test-Audit-Api',
            category: 'MyPerformance',
            name: 'api-audit',
            description: 'API initialized and ready',
            failureDescription: 'API slow to initialize',
            helpText: 'Used to measure time from api load',
            requiredArtifacts: ['TimeToApi']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToApi;

        const belowThreshold = loadedTime <= MAX_CARD_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadAudit;