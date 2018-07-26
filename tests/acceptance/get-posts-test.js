import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | get posts', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /get-posts', async function(assert) {
    //server.put('/posts/:id', {errors: ['There was an error']}, 403);

    await visit('/example');

    await click('.foo-button');

    assert.equal(currentURL(), '/example');
  });
});
