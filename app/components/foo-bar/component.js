import Component from '@ember/component';

export default Component.extend({
  actions: {
    publish(post) {
      post.set('title', '1111');

      post.save()
        .then(() => {
          console.log('SUCCESS');
        });
    }
  }
});
