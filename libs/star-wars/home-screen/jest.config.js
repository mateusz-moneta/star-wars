module.exports = {
  name: 'star-wars-home-screen',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/star-wars/home-screen',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
