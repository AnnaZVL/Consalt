const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: true,
  });

  /*Вывод ближайшего понедельника */

  function getMondey() {
    const currentDate = new Date()
    const currentDayOfWeek = currentDate.getDay();

    const daysNextMonday = currentDayOfWeek === 1 ? 7 : 1 - currentDayOfWeek;

    const nextMonday = new Date(currentDate);
    nextMonday.setDate(currentDate.getDate() + daysNextMonday);

    const formateDate = nextMonday.toLocaleDateString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' });
    return formateDate
  }

  const dateSale = document.getElementById('sale')

  dateSale.textContent = getMondey()