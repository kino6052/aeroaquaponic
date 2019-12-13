export class Utils {
  static scrollToId = id => {
    const y = document.querySelector(id).getBoundingClientRect().top
    window.scrollTo(0, y)
  }
}
