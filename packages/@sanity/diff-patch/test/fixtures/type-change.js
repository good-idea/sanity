exports.a = {
  _id: 'abc123',
  _type: 'isrequired',
  number: 13,
  string: 'foo',
  bool: true,
  array: ['zero', 1, {two: {levels: {deep: 'value'}}}],
  object: {'13': 13},
  unset: 'me'
}

exports.b = {
  _id: 'abc123',
  _type: 'isrequired',
  number: 1337,
  string: 'bar',
  bool: false,
  array: [0, 'one', {two: {levels: {other: 'value'}}}],
  object: {'12': '12', '13': null}
}