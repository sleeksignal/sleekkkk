document.addEventListener('DOMContentLoaded', function () {
    const options = {
        threshold: 0.5, // 요소가 50% 이상 보일 때 애니메이션 시작
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // 기존의 클래스 선택자들을 사용하여 요소를 선택합니다.
    const elements = document.querySelectorAll('.section-content, .intro-option, .image-item, .benefit-item, .pricing-option, .form-container');
    elements.forEach(element => {
        observer.observe(element);
    });
});


function updateValue(value) {
    document.getElementById("credit-value").innerText = value;
    calculatePercentage(value);
}

function calculatePercentage(value) {
    let percentage = 0;

    if (value >= 0 && value < 100000) {
        percentage = value * 0.2;
    } else if (value >= 100000 && value < 300000) {
        percentage = value * 0.15;
    } else if (value >= 300000 && value < 700000) {
        percentage = value * 0.1;
    } else if (value >= 700000) {
        percentage = value * 0.05;
    }

    const result = parseFloat(value) + parseFloat(percentage);
    document.getElementById("result").innerText = `${Math.round(percentage)} 원, 최종 결제 금액: ${Math.round(result)} 원`;
}


function doGet(e) {
    return HtmlService.createHtmlOutputFromFile('Index');
  }
  
  function getData() {
    var sheet = SpreadsheetApp.openById('스프레드시트 ID').getActiveSheet();
    var data = sheet.getDataRange().getValues();
    return data;
  }
  