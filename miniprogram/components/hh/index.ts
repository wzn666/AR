// components/hh/index.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarTextureId: "white",
  },
  handleReady: function ({detail}) {
    this.scene = detail.value;
  },
  handleAssetsLoaded: function ({detail}) {
    wx.showToast({title: '点击屏幕放置'});
    this.scene.event.add('touchstart', () => {
      console.log('=====================');
      
      this.scene.ar.placeHere('setitem', true);
    });
  },
  handleTick:function({detail}){
    this.helmet && this.triggerEvent('syncPositions', [
      this.getScreenPosition(this.helmet),
      this.getScreenPosition(this.miku)
    ]);
  },
  handleTouchModel: function ({detail}) {
    const {target} = detail.value;
    this[target.id].color = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.5)`;
  },
  getScreenPosition: function(value) {
    const {el, color} = value;
    const xrFrameSystem = wx.getXrFrameSystem();
    this.tmpV3.set(el.getComponent(xrFrameSystem.Transform).worldPosition);
    const clipPos = this.camera.convertWorldPositionToClip(this.tmpV3);
    const {frameWidth, frameHeight} = this.scene;
    return [((clipPos.x + 1) / 2) * frameWidth, (1 - (clipPos.y + 1) / 2) * frameHeight, color, el.id];
  },
  onLoad() {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
