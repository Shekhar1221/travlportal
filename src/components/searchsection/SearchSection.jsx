
// const SearchSection = () => {
//   return (
//     <div  style={{marginTop:'30px'}} className="hotels_search_box">
//       {/* <Helmet>
//         <title>
//           Book Flights, Hotels, Bus Tickets & Holidays -{" "}
//           {AppConstants.DOMAIN_NAME}
//         </title>
//         <meta
//           name="description"
//           content=" Get cheap flight tickets, hotels, bus tickets and holiday packages with a best tour & travel company of India- Shopyourtrip.com.  Avail complete travel solutions for a lifetime journey. "
//         />
//       </Helmet> */}
//       <div className="hotels-wrapper">
//         {/* <h2 className="lowest-ne-p">Search Lowest Airfare</h2> */}
//         <div className="class-container">
//           <div>
//             <Radio.Group
//               // onChange={(e) => updateTravelType(e.target.value)}
//               value={travel_type}
//             >
//               <Radio
//                 className={`bdr-icon-f ${
//                   travel_type === "oneWay" ? "tripTypeActive" : ""
//                 }`}
//                 value={"oneWay"}
//               >
//                 One way
//               </Radio>
//               <Radio
//                 className={`bdr-icon-f ${
//                   travel_type === "roundTrip" ? "tripTypeActive" : ""
//                 }`}
//                 value={"roundTrip"}
//               >
//                 Round trip
//               </Radio>
//               {/* <Radio value={"multidestination"}>Multi-city</Radio> */}
//             </Radio.Group>
//           </div>
//           {/* <div className="select_wrapper">
//             <span className="class-type">Class :</span>
//             <Select
//               value={cabinClass}
//               className="classTypeSelect"
//               onChange={updateCablinClass}
//               style={{ width: "150px" }}
//             >
//               <Option value="Economy">Economy</Option>
//               <Option value="premiumEconomy">Economy Premium</Option>
//               <Option value="Business">Business</Option>
//               <Option value="first">First Class</Option>
//               <Option value="premiumFirst  ">Premium First Class</Option>
//             </Select>
//           </div> */}
//         </div>

//         <div id="oneWayForm">
//           {props.modify && (
//             <Row className="modifySelect" justify="space-between">
//               <Col md={12} xs={12}>
//                 <Select
//                   value={travel_type}
//                   // onChange={updateTravelType}
//                   className="modify-selectors"
//                 >
//                   <Option value={"oneWay"}>One Way</Option>
//                   <Option value={"roundTrip"}>RoundTrip</Option>
//                   {/* <Option value={"multidestination"}>Multi-city</Option> */}
//                 </Select>
//               </Col>
//               {/* <Col md={12} xs={12} style={{ textAlign: "right" }}>
//                 <Select
//                   value={cabinClass}
//                   onChange={updateCablinClass}
//                   className="modify-selectors"
//                   style={{ width: "150px" }}
//                 >
//                   <Option value="Economy">Economy</Option>
//                   <Option value="premiumEconomy">Economy Premium</Option>
//                   <Option value="Business">Business</Option>
//                   <Option value="first">First Class</Option>
//                   <Option value="premiumFirst  ">Premium First Class</Option>
//                 </Select>
//               </Col> */}
//             </Row>
//           )}

//           <Form
//             form={form}
//             onFinish={onFormSubmit}
//             className="flight-search flight-bg-side"
//             layout="vertical"
//             initialValues={intitial}
//           >
//             <Row className="flight-alert-sec">
//               {travel_type != "multidestination" ? (
//                 <>
//                   {/* <Col md={5} xs={24} className="originwrapper">
//                     <AirportAutoComplete
//                       formItemProps={{
//                         name: "origin",

//                         rules: [
//                           {
//                             required: true,
//                             message: "Please Specify The City",
//                           },
//                           {
//                             // validator: (_, value) => {
//                             //   let destination =
//                             //     form.getFieldValue("destination");
//                             //   return OriDesValidate(value, destination);
//                             // },
//                           },
//                         ],
//                       }}
//                       selectProps={{
//                         size: "large",
//                         placeholder: "Origin",
//                       }}
//                       refName={origin}
//                       // focusRef={destination}
//                       // handleOnSubmit={handleOnSubmit}
//                       // dataFlip={dataFlip}
//                     />
//                     <img
//                       className="arrow-bus-inr"
//                       // src={arrowImg}
//                       alt="Arrow img"
//                       // onClick={handleSwap}
//                     />
//                   </Col> */}

//                   {/* <Col md={5} xs={24} className="destination">
//                     <AirportAutoComplete
//                       formItemProps={{
//                         name: "destination",
//                         rules: [
//                           {
//                             required: true,
//                             message: "Please Specify The City",
//                           },
//                           {
//                             validator: (_, value) => {
//                               // let origin = form.getFieldValue("origin");
//                               // return OriDesValidate(origin, value);
//                             },
//                           },
//                         ],
//                       }}
//                       selectProps={{
//                         size: "large",
//                         placeholder: "Destination",
//                       }}
//                       // refName={destination}
//                       // focusRef={dateBox}
//                       // handleOnSubmit={handleOnSubmit}
//                       // dataFlip={dataFlip}
//                     />
//                   </Col> */}
//                   <Col md={3} xs={24}>
//                     <Form.Item
//                       name="departure"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please Select a Date",
//                         },
//                       ]}
//                     >  <DatePicker
//                     allowClear={false}
//                     style={{ width: "100%" }}
//                     className="train-search-btn"
//                     size="large"
//                     format={"DD-MM-YYYY"}
//                     // disabledDate={disabledOriginDate}  // Disable dates before today
//                     // onChange={(date, dateString) => onChangeOriginDate(date, dateString)}
//                     // ref={dateBox}
//                     // open={showDate}
//                     // onOpenChange={() => setShowDate((prev) => !prev)}  // Toggle date picker open/close state
//                     placeholder="Departure Date"
//                   />
//                     </Form.Item>
//                   </Col>

//                   <Col md={3} xs={24}>
//                     <Form.Item
//                       className="returnDate"
//                       name="arrival"
//                       rules={[
//                         {
//                           // required: travel_type === "roundTrip" ? true : false,
//                           message: "Please Select a Date",
//                         },
//                       ]}
//                     >
//                       <DatePicker
//                         style={{ width: "100%" }}
//                         className="train-search-btn"
//                         size="large"
//                         format={"DD-MM-YYYY"}
//                         // defaultPickerValue={arrivalDate}
//                         // disabledDate={disabledDestDate}
//                         // onChange={(date) => {
//                         //   if (!date) {
//                         //     form.setFieldsValue({
//                         //       arrival: "",
//                         //     });
//                         //     // setTravelType("oneWay");
//                         //   }
//                         // }}
//                         // ref={returnDateBox}
//                         // open={showReturnDate}
//                         // onOpenChange={() => {
//                         //   setShowReturnDate((prev) => !prev);
//                         // }}
//                         placeholder="Arrival Date"
//                         // disabled={travel_type != "roundTrip" ? true : false}
//                         // onClick={() => {
//                         //   if (travel_type != "roundTrip") {
//                         //     setTravelType("roundTrip");
//                         //   }
//                         // }}
//                       />
//                     </Form.Item>
//                   </Col>
//                 </>
//               ) : (
//                 ""// <MultiCityList setTogle={setTogle} />
//               )}

//               <Col md={3} xs={24}>
//                 <Form.Item
//                   name="cabinClass"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Required",
//                     },
//                   ]}
//                 >
//                   <Select size="large">
//                     <Option value="Economy">Economy</Option>
//                     <Option value="premiumEconomy">Premium Economy</Option>
//                     <Option value="Business">Business</Option>
//                     <Option value="first">First Class</Option>
//                     <Option value="premiumFirst">Premium First Class</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>
//               <Col md={2} xs={24}>
//                 {/* <PaxInput /> */}
//               </Col>
//               <Col md={3} xs={24}>
//                 <Button
//                   // ref={searchBtn}
//                   className="primary-btn"
//                   htmlType="submit"
//                 >
//                   <SearchOutlined />
//                   Search
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </div>
//       </div>
//     </div>
//   )
// }




import React, { useMemo,useRef, useState } from 'react'
import './searchsection.css'
import debounce from 'lodash/debounce';
import { Button, Col, DatePicker, Form, Radio, Row,Spin, Select, Input ,Dropdown,Space,Flex} from 'antd';
import { AudioOutlined, CalendarOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
const { Option } = Select;
const { Search } = Input;
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];




const prefix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
)
const SearchSection = () => {

  function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);
    const fetchRef = useRef(0);
    const debounceFetcher = useMemo(() => {
      const loadOptions = (value) => {
        fetchRef.current += 1;
        const fetchId = fetchRef.current;
        setOptions([]);
        setFetching(true);
        fetchOptions(value).then((newOptions) => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return;
          }
          setOptions(newOptions);
          setFetching(false);
        });
      };
      return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout]);
    return (
      <Select
        labelInValue
        filterOption={false}
        onSearch={debounceFetcher}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        suffixIcon={null}
        prefix={<span className="material-symbols-outlined searchlocation">location_on</span>}
        {...props}
        options={options}
        style={{border:'none',width:'100%'}}
      />
    );
  }


  
async function fetchUserList(username) {
  // console.log('fetching user', username);
  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map((user) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      })),
    );
}
  

  const paxBox = useRef();
  const searchBtn = useRef();

  const [passengers, setPassengers] = useState({
    adults: 1,
    childs: 0,
    infants: 0,
  });

  const [value, setValue] = useState([])

  const [toggle, setTogle] = useState(false);

  const updatePaxCount = (opr) => {
    if (passengers.adults + passengers.childs + passengers.infants == 9) {
      if (opr == "adultInc" || opr == "infantInc" || opr == "childInc") {
        return;
      }
    }
    switch (opr) {
      case "adultInc":
        setPassengers({ ...passengers, adults: passengers.adults + 1 });
        break;
      case "adultDec":
        if (passengers.adults > 1) {
          setPassengers({ ...passengers, adults: passengers.adults - 1 });
        }
        break;
      case "childInc":
        setPassengers({ ...passengers, childs: passengers.childs + 1 });
        break;
      case "childDec":
        if (passengers.childs >= 1) {
          setPassengers({ ...passengers, childs: passengers.childs - 1 });
        }
        break;
      case "infantInc":
        setPassengers({ ...passengers, infants: passengers.infants + 1 });
        break;
      case "infantDec":
        if (passengers.infants >= 1) {
          setPassengers({ ...passengers, infants: passengers.infants - 1 });
        }
        break;
    }
  };

  const handleFocus = () => {
    // searchBtn.current.focus();
  };

  const PaxInput = () => (
    <Form.Item className="flight-passenger">
      <Input
        ref={paxBox}
        size="large"
        readOnly
        value={`${passengers.adults + passengers.childs + passengers.infants} Select travellers`}
        style={{ cursor: "pointer" }}
        onClick={() => setTogle(toggle ? false : true)}
        placeholder='Select travellers'
        className='noOfPassengerInput'
        prefix={<UserOutlined style={{color:'blue'}}/>}
      />
      <div
        style={{
          display: toggle ? "block" : "none",
        }}
        className="pax-modal"
      >
        <div className="pax-modal-wrapper">
          <div className="pax-modal-arrow"></div>
          <li>
            <div className="pax-label">
              <p>Adults</p>
              <span>over 12 years old</span>
            </div>
            <div className="pax-count">
              <i
                className="fa fa-minus"
                aria-hidden="true"
                onClick={(e) => updatePaxCount("adultDec")}
              ></i>
              <span>{passengers.adults}</span>
              <i
                className="fa fa-plus"
                aria-hidden="true"
                onClick={(e) => updatePaxCount("adultInc")}
              ></i>
            </div>
          </li>

          <li>
            <div className="pax-label">
              <p>Children</p>
              <span>2 - 12 years old</span>
            </div>
            <div className="pax-count">
              <i
                className="fa fa-minus"
                aria-hidden="true"
                onClick={(e) => updatePaxCount("childDec")}
              ></i>
              <span>{passengers.childs}</span>
              <i
                className="fa fa-plus"
                aria-hidden="true"
                onClick={(e) => updatePaxCount("childInc")}
              ></i>
            </div>
          </li>
          <li>
            <div className="pax-label">
              <p>Infants</p>
              <span>upto 2 years old</span>
            </div>
            <div className="pax-count">
              <i
                className="fa fa-minus"
                aria-hidden="true"
                onClick={(e) => updatePaxCount("infantDec")}
              ></i>
              <span>{passengers.infants}</span>
              <i
                className="fa fa-plus"
                aria-hidden="true"
                onClick={(e) => updatePaxCount("infantInc")}
              ></i>
            </div>
          </li>
          {passengers.infants > passengers.adults ? (
            <li>
              <span
                style={{
                  fontSize: "11px",
                  color: "red",
                }}
              >
                The number of infants cannot be grater than the number of
                adults.
              </span>
            </li>
          ) : (
            ""
          )}
          {passengers.adults + passengers.child > 9 ? (
            <li>
              <i
                className="fa fa-info-circle"
                aria-hidden="true"
                style={{ fontSize: "30px" }}
              ></i>
              &nbsp;&nbsp;
              <span
                style={{
                  fontSize: "11px",
                  color: "blue",
                }}
              >
                Booking for more than 9 persons will be procced as group
                booking.
              </span>
            </li>
          ) : (
            ""
          )}
          <div>
            <Button
              block
              className="pax-ready-btn"
              onClick={() => {
                setTogle((prev) => !prev);
                if (toggle) {
                  handleFocus();
                }
              }}
            >
              Ready
            </Button>
          </div>
        </div>
      </div>
    </Form.Item>
  );

  return (
    <div className="contoutmost">
        <div className='outerSearch'>
      <div className="searchBoxHead">
        Book A Flight
      </div>
      <div className='radioSection'>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio className='radiobutton' value={1}>Round Trip</Radio>
          <Radio className='radiobutton' value={2}>One Way</Radio>
        </Radio.Group>
      </div>
      <div className='searchSection'>
        {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}> */}
        <Row gutter={0}>
          <Col lg={6} md={6} sm={24} xs={24}>
            <div className='originContainer'>
              <p className='originHeading'>Flying From</p>
              {/* <Input className='flyingfrominput' size="large" placeholder="Airport or City" prefix={<span className="material-symbols-outlined searchlocation">location_on</span>} /> */}
              <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Airport or City"
      // prefix={<span className="material-symbols-outlined searchlocation">location_on</span>}
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: '100%',
      }}
    />
            </div>
          </Col>
          <Col lg={6} md={6} sm={24} xs={24}>
            <div className='destinationContainer'>
              <p className='destinationHeading'>Flying To</p>
              {/* <Input className='flyingtoinput' size="large" placeholder="Airport or City"
               prefix={<span className="material-symbols-outlined searchlocation">location_on</span>}
               /> */}
                <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Airport or City"
      // prefix={<span className="material-symbols-outlined searchlocation">location_on</span>}
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: '100%',
      }}
    />
            </div>
          </Col>
          <Col lg={3} md={3} sm={24} xs={24}>
            <div className='departureDateContainer'>
              <p className='departureDateHead'>Departure Date</p>
              <DatePicker
                allowClear={false}
                style={{ width: "100%" }}
                size="large"
                format={"DD-MM-YYYY"}
                placeholder="DD/MM/YY"
                className='datePicker'
              />
            </div>
          </Col>
          <Col lg={3} md={3} sm={24} xs={24}>
            <div className='returndateContainer'>
              <p className='returnDateHead'>Return Date</p>
              <DatePicker
                allowClear={false}
                style={{ width: "100%" }}
                size="large"
                format={"DD-MM-YYYY"}
                placeholder="DD/MM/YY"
                className='datePicker'
              />
            </div>
          </Col>
          <Col lg={4} md={4} sm={24} xs={24}>
            <div className='passengernoContainer'>
              <p className='noOfPassengerHead'>Passenger</p>
              <PaxInput />
            </div>
          </Col>
          <Col lg={2} md={2} sm={24} xs={24}>
            <div className="searchbtnContainer">
              <button className='searchbtn'>Search</button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="dropdownsection">
        <Flex className='searchboxdropdownouterflex' justify='space-between' wrap>
          <Flex  wrap>
            <Dropdown className='searchsectiondropdown'
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Economy
                  <DownOutlined className='searchdropdowndownoutlined'/>
                </Space>
              </a>
            </Dropdown>
            <Dropdown  className='searchsectiondropdown'
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  All Airlines
                  <DownOutlined className='searchdropdowndownoutlined'/>
                </Space>
              </a>
            </Dropdown>
            <Dropdown className='searchsectiondropdown'
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Flexible Dates
                  <DownOutlined className='searchdropdowndownoutlined'/>
                </Space>
              </a>
            </Dropdown>
          </Flex>
          <div className='searchsectionbottomtext'>24 seven customer service available</div>
        </Flex>
      </div>
    </div>
    </div>
  )
}

export default SearchSection
