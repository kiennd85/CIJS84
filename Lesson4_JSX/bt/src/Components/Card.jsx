import './styleCard.css';

const Card = (props) => {
  const { imageShow = true, titleIndex = 'right' } = props;
  const title = 'Thông xe cao tốc Nha Trang - Cam Lâm và Vĩnh Hảo - Phan Thiết';

  return (
    <div className="row cardbox">
      {titleIndex == 'top' && <div className="title">{title}</div>}

      {imageShow == true && (
        <div className="col-6 imageBox">
          <img
            src="https://congluan-cdn.congluan.vn/files/content/2023/05/19/chinh-thuc-khai-thac-cao-toc-nha-trang-cam-lam-vinh-hao-phan-thiet-061403254.jpg"
            alt=""
          />
        </div>
      )}

      <div className={imageShow == false ? 'col-12' : 'col-6'}>
        {titleIndex == 'right' && <div className="title">{title}</div>}
        <div>Cao tốc Nha Trang - Cam Lâm dài hơn 49 km qua tỉnh Khánh Hòa, đầu tư theo hình thức đối tác công tư (PPP) với hơn 7.600 tỷ đồng. Còn cao tốc Vĩnh Hảo - Phan Thiết dài hơn 100 km qua tỉnh Bình Thuận. Hai tuyến trên cách nhau hơn 78 km, với dự án cao tốc Cam Lâm – Vĩnh Hảo nằm ở đoạn giữa đang được thi công. Vì vậy, Phan Thiết và Nha Trang vẫn chưa được kết nối thông suốt theo cao tốc.</div>
      </div>
      {titleIndex == 'bottom' && <div className="title">{title}</div>}
    </div>
  );
};

export default Card;
