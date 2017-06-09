import React from 'react';
import PropTypes from 'prop-types';
import ReactNative from 'react-native';

let { requireNativeComponent, NativeModules, View } = ReactNative;

let RNSpinkit = null;

class Spinkit extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    color: React.PropTypes.string,
    size: React.PropTypes.number,
    isVisible: React.PropTypes.bool,
    testID: React.PropTypes.string,
    accessibilityComponentType: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    accessibilityLiveRegion: PropTypes.string,
    renderToHardwareTextureAndroid: PropTypes.bool,
    importantForAccessibility: PropTypes.string,
    onLayout: PropTypes.func
  };

  static defaultProps = {
    size: 37,
    color: '#000000',
    isVisible: true
  };

  render() {
    var size = { height: this.props.size, width: this.props.size };

    if (!this.props.isVisible) return <View />;
    return (
      <RNSpinkit
        type={String(this.props.type)}
        size={parseInt(this.props.size)}
        color={this.props.color}
        style={[size, this.props.style]}
      />
    );
  }
}

// Since RNPM does not recognize `requireNativeComponent`, so we have to
// add this line, and RNPM will link native modules automatically
NativeModules.RNSpinkit;

// Native component
RNSpinkit = requireNativeComponent('RNSpinkit', Spinkit, {
  nativeOnly: {
    nativeID: true
  }
});

module.exports = Spinkit;
