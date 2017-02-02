import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('people-list', 'Integration | Component | people list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{people-list}}`);

  assert.equal(this.$().text().trim(), '');


	let stubModel = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
	this.set('model', stubModel);
	// Template block usage:
	this.render(hbs`{{people-list title="List of Scientists" people=model}}`);

  assert.equal(this.$('h2').text().trim(), 'List of Scientists');
	assert.equal(this.$('ul li').length, 3);
	assert.equal(this.$('ul li:first').text().trim(), 'Marie Curie');
	assert.equal(this.$('ul li:nth-child(2)').text().trim(), 'Mae Jemison');
	assert.equal(this.$('ul li:last').text().trim(), 'Albert Hofmann');
});
