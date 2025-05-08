const AddToCartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <circle cx={19.5} cy={19.5} r={18.5} fill="#E9E9E9" fillOpacity={0.5} />
    <circle cx={19.5} cy={19.5} r={19} stroke="#686666" strokeOpacity={0.5} />
    <path stroke="#000" d="M19.5 14v11M14 19.5h11" />
  </svg>
);
export default AddToCartIcon;
