import React from "react";
import classnames from "classnames";
import { Inputfield, ErrorMessage, Label } from "@ui/components/atoms";

const getFieldsArray = (
  data,
  errors,
  register,
  states = [{}],
  getStates,
  cities = [{}],
  getCities,
  branches = [{}],
  categories = [{}],
  events = [{}],
  preachers = [{}],
  fellowships = [{}],
) => {
  const fieldsArray = [];

  
  if (data.config != undefined) {
    const { defaults, zonesdata, countries, user } = data;

    data.config.map((conf) => {
      fieldsArray.push(
        conf.field.includes("userid") ? (
          ""
        ) : conf.field == "zoneid" ? (
          <div className="form-group col-md-6" key={`${conf.field}-1`}>
            <Label labelClassName="text-normal text-dark">ZONE</Label>
            <select
              id={`${conf.field}-2`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
            >
              <option value="">Choose zone...</option>
              {zonesdata &&
                zonesdata.map((val) => (
                  <option value={val.id} key={val.id} selected={user && user.zoneid === val.id}>
                    {val.name}
                  </option>
                ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "branchid" ? (
          <div className="form-group col-md-6" key={`${conf.field}-9`}>
            <Label labelClassName="text-normal text-dark">BRANCH</Label>
            <select
              id={`${conf.field}-10`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
            >
              <option value="">Choose branch...</option>
              {branches.map((val) => (
                <option value={val.id} key={val.id} selected={user && user.branchid === val.id}>
                  {val.name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "categoryid" ? (
          <div className="form-group col-md-6" key={`${conf.field}-11`}>
            <Label labelClassName="text-normal text-dark">CATEGORY</Label>
            <select
              id={`${conf.field}-12`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
            >
              <option value="">Choose category...</option>
              {categories.map((val) => (
                <option value={val.id} key={val.id}>
                  {val.name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "eventid" ? (
          <div className="form-group col-md-6" key={`${conf.field}-13`}>
            <Label labelClassName="text-normal text-dark">EVENT</Label>
            <select
              id={`${conf.field}-14`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
            >
              <option value="">Choose event...</option>
              {events.map((val) => (
                <option value={val.id} key={val.id}>
                  {val.name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "preacherid" ? (
          <div className="form-group col-md-6" key={`${conf.field}-15`}>
            <Label labelClassName="text-normal text-dark">PREACHER</Label>
            <select
              id={`${conf.field}-16`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
            >
              <option value="">Choose preacher...</option>
              {preachers.map((val) => (
                <option value={val.id} key={val.id}>
                  {`${val.firstname} ${val.lastname}`}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "fellowshipid" ? (
          <div className="form-group col-md-6" key={`${conf.field}-17`}>
            <Label labelClassName="text-normal text-dark">FELLOWSHIP</Label>
            <select
              id={`${conf.field}-18`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
            >
              <option value="">Choose fellowship...</option>
              {fellowships.map((val) => (
                <option value={val.id} key={val.id}>
                  {val.name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "country" ? (
          <div className="form-group col-md-6" key={`${conf.field}-3`}>
            <Label labelClassName="text-normal text-dark">
              {conf.field.toUpperCase()}
            </Label>
            <select
              id={`${conf.field}-4`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
              onChange={(e) => getStates(e.target.value)}
            >
              <option value="">{`Choose ${conf.field}...`}</option>
              {countries &&
                countries.map((val) => (
                  <option value={val.id} key={val.id}>
                    {val.name}
                  </option>
                ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "state" ? (
          <div className="form-group col-md-6" key={`${conf.field}-5`}>
            <Label labelClassName="text-normal text-dark">
              {conf.field.toUpperCase()}
            </Label>
            <select
              id={`${conf.field}-6`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
              onChange={(e) => getCities(e.target.value)}
            >
              <option value="">{`Choose ${conf.field}...`}</option>
              {states.map((val) => (
                <option value={val.id} key={val.id}>
                  {val.name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "city" ? (
          <div className="form-group col-md-6" key={`${conf.field}-7`}>
            <Label labelClassName="text-normal text-dark">
              {conf.field.toUpperCase()}
            </Label>
            <select
              id={`${conf.field}-8`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
            >
              <option value="">{`Choose ${conf.field}...`}</option>
              {cities.map((val) => (
                <option value={val.id} key={val.id}>
                  {val.name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : (
          <div
            className={classnames("form-group col-md-6", {
              "is-invisible": conf.field.includes("id"),
            })}
            key={conf.field}
          >
            <Label labelClassName="text-normal text-dark">
              {conf.field.toUpperCase()}
            </Label>
            <Inputfield
              key={conf.field}
              inputRows={conf.field == "config" ? 16 : 6}
              fieldType={conf.field == "notes" ? "textarea" : (conf.field == "config" ? "textarea" : "")}
              inputType={conf.datatype == "integer" ? "number" : (conf.field.includes("password") ? "password" : (conf.field.includes("date") ? "date" : "text"))}
              inputClassName={classnames("form-control", {
                "is-invalid": errors[conf.field],
              })}
              defaultValue={(defaults) ? ((typeof defaults[conf.field] == "object") ? (JSON.stringify(defaults[conf.field])) : defaults[conf.field]?.toString()) : ""}
              // inputDisabled={conf.field.includes("id") ? true : false}
              inputName={conf.field}
              inputRef={register(conf.validation)}
            />
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ),
      );
    });
  }
  return fieldsArray;
};

export default getFieldsArray;
