export default (): void => {
  // ナビゲーションの種別
  const navigation = performance.navigation
  const type       = navigation.type
  let nav = ''
  switch (type) {
  case navigation.TYPE_NAVIGATE:
    nav = 'Navigate'
    break
  case navigation.TYPE_BACK_FORWARD:
    nav = 'Reload'
    break
  case navigation.TYPE_RESERVED:
    nav = 'BackForward'
    break
  default:
    nav = 'Reserved'
    break
  }
  console.log(`ナビゲーションの種別: ${nav}`)

  const timing = performance.timing
  // リダイレクトにかかる時間
  console.log(`リダイレクト: ${timing.redirectEnd - timing.redirectStart}ms`)
  // ドメインの解決にかかる時間
  console.log(`DNS: ${(timing.domainLookupEnd - timing.domainLookupStart)}ms`)
  // 接続の確立にかかる時間
  console.log(`接続(TCP): ${(timing.connectEnd - timing.connectStart)}ms`)
  // HTTPリクエストにかかる時間
  console.log(`HTTPリクエスト: ${(timing.responseStart - timing.requestStart)}ms`)
  // HTTPレスポンスにかかる時間
  console.log(`HTTPレスポンス: ${timing.responseEnd - timing.responseStart}ms`)
  // DOM構築にかかる時間
  console.log(`DOM構築: ${(timing.domComplete - timing.domLoading)}ms`)
}
