const CustomListUser = ({ listUser, removeBtn, editBtn }) => {
  return (
    <div>
      <table className="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th
              scope="col"
              style={{ textAlign: 'center' }}
            >
              #
            </th>
            <th
              scope="col"
              style={{ textAlign: 'center' }}
            >
              Họ và tên
            </th>
            <th
              scope="col"
              style={{ textAlign: 'center' }}
            >
              Giới tính
            </th>
            <th
              scope="col"
              style={{ textAlign: 'center' }}
            >
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody>
          {listUser.map((item, index) => (
            <tr
              key={index}
              style={{ alignItems: 'center' }}
            >
              <th
                scope="row"
                style={{ textAlign: 'center' }}
              >
                {index + 1}
              </th>
              <td>
                {item.ho} {item.ten}
              </td>
              <td style={{ textAlign: 'center' }}>{item.gioitinh == 1 ? 'Nam' : 'Nữ'}</td>
              <td style={{ display: 'flex', justifyContent: 'center' }}>
                <div title="Xóa">
                  <button
                    className="btn btnRmv subBtn"
                    type="button"
                    onClick={(event) => {
                      removeBtn(event, item.id);
                    }}
                  >
                    <i className="fa-solid fa-trash fa-lg"></i>
                  </button>
                </div>
                <div title="Sửa">
                  <button
                    className="btn subBtn"
                    type="button"
                    onClick={(event) => {
                      editBtn(event, item.id);
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square fa-lg "></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomListUser;
