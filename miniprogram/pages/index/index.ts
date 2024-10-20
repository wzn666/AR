
Page({
  data: {
    width: 300,
    height: 300,
    renderWidth: 300,
    renderHeight: 300,
    loaded: false,
    positions: [[0, 0, 'rgba(44, 44, 44, 0.5)', ''], [0, 0, 'rgba(44, 44, 44, 0.5)', '']],  
  },
  handleLoaded: function({detail}) {
    this.setData({loaded: true});
  },
  handleSyncPositions: function({detail}) {
    this.setData({positions: detail});
  },
  onLoad() {
    const info = wx.getWindowInfo();
    
    const width = info.windowWidth;
    const height = info.windowHeight;
    const dpi = info.pixelRatio;
    this.setData({
      width, height,
      renderWidth: width * dpi,
      renderHeight: height * dpi
    });
  },
})
