export function detectDevice(screenWidth) {
  let mobileDevice = false
  let tableDevice = false
  let pcDevice = false

  if (screenWidth >= 768 && screenWidth < 1120) {
    tableDevice = true
  } else if (screenWidth >= 1120) {
    pcDevice = true
  } else {
    mobileDevice = true
  }

  return { mobileDevice, tableDevice, pcDevice }
}
