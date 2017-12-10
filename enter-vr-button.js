AFRAME.registerComponent('enter-vr-button', {
  init: function () {
    this.el.sceneEl.addEventListener('loaded', this.putTheButtonBack.bind(this));
  },
  putTheButtonBack: function () {
    var sceneEl = this.el.sceneEl;

    // A-Frame bug: vr-mode-ui can't be re-enabled, because it doesn't clear internal variables
    var uiComponent = sceneEl.components['vr-mode-ui'];
    uiComponent.enterVREl = null;
    uiComponent.orientationModalEl = null;

    sceneEl.setAttribute('vr-mode-ui', 'enabled', true); 
  }
});