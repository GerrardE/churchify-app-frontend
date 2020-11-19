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
  categories,
) => {
  const fieldsArray = [];

  if (data.config != undefined) {
    const { defaults, zonesdata, countries } = data;
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
                zonesdata.map((zone) => (
                  <option value={zone.id} key={zone.id}>
                    {zone.name}
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
              {branches.map((branch) => (
                <option value={branch.id} key={branch.id}>
                  {branch.name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "categoryid" ? (
          <div className="form-group col-md-6" key={`${conf.field}-9`}>
            <Label labelClassName="text-normal text-dark">CATEGORY</Label>
            <select
              id={`${conf.field}-10`}
              className={classnames("form-control custom-select mr-sm-2", {
                "is-invalid": errors[conf.field],
              })}
              ref={register(conf.validation)}
              name={conf.field}
            >
              <option value="">Choose category...</option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
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
                countries.map((country) => (
                  <option value={country.id} key={country.id}>
                    {country.name}
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
              {states.map((state) => (
                <option value={state.id} key={state.id}>
                  {state.name}
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
              {cities.map((city) => (
                <option value={city.id} key={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            <ErrorMessage message={errors[conf.field]?.message} />
          </div>
        ) : conf.field == "date" ? (
          <div className="form-group col-md-6">
            <Label labelClassName="text-normal text-dark">
              {conf.field.toUpperCase()}
            </Label>
            <Inputfield
              key={conf.field}
              inputType="date"
              inputClassName={classnames("form-control", {
                "is-invalid": errors[conf.field],
              })}
              defaultValue={defaults && defaults[conf.field]?.toString()}
              inputName={conf.field}
              inputRef={register(conf.validation)}
            />
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
              fieldType={conf.field == "notes" ? "textarea" : ""}
              inputType="text"
              inputClassName={classnames("form-control", {
                "is-invalid": errors[conf.field],
              })}
              defaultValue={defaults && defaults[conf.field]?.toString()}
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
