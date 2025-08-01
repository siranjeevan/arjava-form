import { useState } from "react";
import { NumberValidation , emailValidation } from "../../Validation/Validation";
import Select from "react-select";

function Label(props) {
  return (
    <div className="flex flex-col w-41">
      <label className="text-[18px] font-light mt-1">
        {props.name} <span className="text-red-800">*</span>
      </label>
      {props.isSubtext === true && <p className="text-[12px] ">{props.subtext}</p>}
    </div>
  );
}

function Input(props) {
  const Single = "w-105";
  const Double = "w-55";
  const Last = "w-45";
  return (
    <input type={props.inputType || "text"} name={props.name} placeholder={props.placeHolderName} value={props.value}  onChange={props.onChange}
      className={`${(props.type === "Single" ? Single : (props.type === "Double" ? Double : Last)) } bg-white h-12 ml-5 p-2 rounded-[7px]
      ${props.IsNumberValidation && (!NumberValidation({ value: props.value })  ? "border border-red-400"  : "border border-gray-300")}
      ${props.IsEmailValidation && (!emailValidation({ value: props.value })  ? "border border-red-400"  : "border border-gray-300")}`} />
  );
}

function FormField() {
  const [formData, setFormData] = useState({
    studentsFirstName: "", studentsLastName: "",
    class: "",  DOB: "",
    parentFirstName: "", parentLastName: "",
    currentAddress: "", currentAddress2: "",
    city: "", Region: "",
    code: "", country: "",
    phone: "",  email: "",
  });

  const Options = [
  {value : "India", label: 'India'},
  {value : "USA", label: 'USA'},
  {value : "UK", label: 'UK'},
  {value : "Canada", label: 'Canada'},
  {value : "Australia", label: 'Australia'},
  {value : "Germany", label: 'Germany'},
  {value : "France", label: 'France'},
  {value : "Japan", label: 'Japan'},
  {value : "China", label: 'China'},
  {value : "Brazil", label: 'Brazil'},
  {value : "South Africa", label: 'South Africa'},
]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
  };

  return (
    <div className="p-3 -mt-3 ml-5">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row ">
          <Label name="Students Name" />
          <Input placeHolderName="First" type="Double" name="studentsFirstName" value={formData.studentsFirstName} onChange={handleChange}/>
          <Input placeHolderName="Last" type="" name="studentsLastName" value={formData.studentsLastName} onChange={handleChange}/>
        </div>

        <div className="flex flex-row mt-5">
          <Label name="Class You Want To apply for" isSubtext={true} subtext="For example: Class 2015-2016"/>
          <Input placeHolderName="" type="Single" name="class" value={formData.class} onChange={handleChange}/>
        </div>

        <div className="flex flex-row mt-0">
          <Label name="Student DOB" />
          <Input type="Single" inputType="date" name="DOB" value={formData.DOB} onChange={handleChange} />
        </div>

        <div className="flex flex-row mt-5">
          <Label name="Parent/Guardian Name" />
          <Input placeHolderName="First" type="Double" name="parentFirstName" value={formData.parentFirstName} onChange={handleChange} />
          <Input placeHolderName="Last" type="" name="parentLastName" value={formData.parentLastName} onChange={handleChange} />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row mt-1">
            <Label name="Current Address" />
            <Input placeHolderName="Street Address" type="Single" name="currentAddress" value={formData.currentAddress} onChange={handleChange} />
          </div>
          <div className="mt-2 ml-41">
            <Input  placeHolderName="Street Address Line 2" type="Single" name="currentAddress2" value={formData.currentAddress2} onChange={handleChange} />
            <div className="flex flex-row mt-2">
              <Input placeHolderName="City" type="Double"  name="city" value={formData.city} onChange={handleChange} />
              <Input placeHolderName="Region" type="" name="Region" value={formData.Region} onChange={handleChange} />
            </div>
            <div className="flex flex-row mt-2">
              <Input inputType ="number" placeHolderName="Postal / Zip Code" type="Double" name="code" value={formData.code} onChange={handleChange} IsNumberValidation = {true} />
              {/* <Input placeHolderName="Country" type="" name="country" value={formData.country} onChange={handleChange}  /> */}
              <Select className="basic-single w-45 ml-5 text-black" classNamePrefix="select" options = {Options} isClearable={true}/>
            </div>  
          </div>
        </div>

        <div className="flex flex-row mt-5">
          <Label name="Phone" />
          <Input placeHolderName="### ### ####" type="Single"  name="phone" value={formData.phone} onChange={handleChange} IsNumberValidation = {true}/>
        </div>

        <div className="flex flex-row mt-4">
          <Label  name="Email" isSubtext={true} subtext="Your admission confirmation will be sent via email" />
          <Input placeHolderName="" type="Single" name="email" value={formData.email} onChange={handleChange} IsEmailValidation = {true}/>
        </div>

        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormField;
