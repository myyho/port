 // 1. Tạo một "người quan sát"
 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            // Khi khối HTML tiến vào màn hình -> Mặc lớp áo hiện hình
            entry.target.classList.add('scroll-show'); 
            
        } else {
            // Khi khối HTML trôi ra ngoài -> Tước bỏ lớp áo để nó quay về trạng thái ẩn
            entry.target.classList.remove('scroll-show'); 
        }
        
    });
}, { threshold: 0.2 }); // THÊM DÒNG NÀY:
  
      // 2. Báo cho người quan sát đi tìm tất cả các thẻ có class .scroll-hidden
      const hiddenElements = document.querySelectorAll('.scroll-hidden');
      
      // 3. Bắt đầu quan sát từng thẻ một
      hiddenElements.forEach((el) => observer.observe(el));

      function about() {
        window.location.href ="4.html"; 
    }
    
    function contact() {
        window.location.href ="23.html"; 
        
    }
    
    function project(){
        window.location.href ="6.html"; 
    }
    
    function home() {
        window.location.href ="index.html"; 
        
    }

    function facebook() {
        var url = "https://www.facebook.com/my.yy.241773/"; 
        
        // '_blank' là tham số bắt buộc để mở trong tab mới
        window.open(url, '_blank');
    }
    
    function inl() {
        var url = "https://www.linkedin.com/in/ý-hồ-hình-mỹ-2a80a027a"; 
        
        // '_blank' là tham số bắt buộc để mở trong tab mới
        window.open(url, '_blank');
    }
    
    function insta() {
        var url = "https://www.instagram.com/ys_mymoni/?igsh=ejhqeHZwbWMwZ2s%3D&utm_source=qr"; 
        
        // '_blank' là tham số bắt buộc để mở trong tab mới
        window.open(url, '_blank');
    }
    
    function tiktok() {
        var url = "https://www.tiktok.com/@ys_mymoni?_r=1&_t=ZS-97Z2cVciH93"; 
        
        // '_blank' là tham số bắt buộc để mở trong tab mới
        window.open(url, '_blank');
    }

    function read_all_02() {
        window.location.href ="21.html"; 
    }

    function flo() {
    var url = "https://www.tiktok.com/@florasion_macrame"; 
        
    // '_blank' là tham số bắt buộc để mở trong tab mới
    window.open(url, '_blank');
}

function song() {
    var url = "https://www.facebook.com/songproject1507"; 
        
    // '_blank' là tham số bắt buộc để mở trong tab mới
    window.open(url, '_blank');
}

function sach() {
    var url = "https://www.facebook.com/clbsachbsitf"; 
        
    // '_blank' là tham số bắt buộc để mở trong tab mới
    window.open(url, '_blank');
}

function MM() {
    var url = "https://www.facebook.com/mastermind.hcmiu/about"; 
        
    // '_blank' là tham số bắt buộc để mở trong tab mới
    window.open(url, '_blank');
    
}

function pise() {

    var url = "https://www.facebook.com/pisevn"; 
        
    // '_blank' là tham số bắt buộc để mở trong tab mới
    window.open(url, '_blank');
}

function ctu_eng() {
    var url = "https://www.facebook.com/EnglishClubCTU/?__tn__=%2Cd"; 
        
    // '_blank' là tham số bắt buộc để mở trong tab mới
    window.open(url, '_blank');
}

function vsac() {
    var url = "https://www.facebook.com/daisusinhvienvn"; 
        
    // '_blank' là tham số bắt buộc để mở trong tab mới
    window.open(url, '_blank');
}

function alphabet() {
    var url = "https://www.facebook.com/ttngoaingualphabet"; 
        
    // '_blank' là tham số bắt buộc để mở trong tab mới
    window.open(url, '_blank');
    
}

function visef_fb(){
    var url = "https://drive.google.com/file/d/15GdotRNmQrHF9axDhLpuaUZk2cVjZPK3/view?usp=drive_link"; 
    
    // '_blank' là tham số bắt buộc để mở trong tab mới
    window.open(url, '_blank');
}
