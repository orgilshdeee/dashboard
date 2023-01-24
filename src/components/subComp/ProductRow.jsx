import { KebabIcon } from "../../icons/kebabIcon";

function ProductRow({ data }) {
  return (
    <tr>
      <td style={{ width: "100px" }}>
        <img style={{ width: "100%" }} src={data.image} alt="id" />
      </td>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.stock}</td>
      <td>{data.category}</td>
      <td>
        <div className="d-flex justify-content-center">
          <KebabIcon />
        </div>
      </td>
    </tr>
  );
}

export default ProductRow;
