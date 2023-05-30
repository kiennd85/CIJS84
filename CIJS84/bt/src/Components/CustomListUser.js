const CustomListUser = ({ listUser, removeBtn, editBtn }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                {item.ho}
                {item.ten}
              </td>
              <td>{item.gioitinh == 1 ? 'Nam' : 'Nữ'}</td>
              <td style={{ display: 'flex' }}>
                <button
                  type="button"
                  onClick={(event) => {
                    removeBtn(event, item.id);
                  }}
                >
                  Xóa
                  {/* <i className="fa-solid fa-trash"></i> */}
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    editBtn(event, item.id);
                  }}
                >
                  Sửa
                  {/* <i className="fa-solid fa-pen-to-square"></i> */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomListUser;
