const CustomListUser = ({ listUser, removeBtn, editBtn }) => {
  return (
    <div>
      <br />
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
                <div>
                  <button
                    className="btn btnRmv"
                    type="button"
                    onClick={(event) => {
                      removeBtn(event, item.id);
                    }}
                  >
                    Xóa
                    {/* <i className="fa-solid fa-trash"></i> */}
                  </button>
                </div>
                <div>
                  <button
                    className="btn"
                    type="button"
                    onClick={(event) => {
                      editBtn(event, item.id);
                    }}
                  >
                    Sửa
                    {/* <i className="fa-solid fa-pen-to-square"></i> */}
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
