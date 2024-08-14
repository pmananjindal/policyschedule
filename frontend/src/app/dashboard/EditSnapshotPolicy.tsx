// src/pages/EditSnapshotPolicy.tsx
import React, { useState } from "react";
import { lockedSnapshot } from "../constants/constants";
import axios from "axios";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const EditSnapshotPolicy = () => {
  const [policyName, setPolicyName] = useState("");
  const [applyToDirectory, setApplyToDirectory] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("Option 1");
  const [time, setTime] = useState("07:00");
  const [selectedDays, setSelectedDays] = useState<Set<string>>(new Set());
  const [selectedOptionDeleteSnapshot, setSelectedOptionDeleteSnapshot] =
    useState<string>("never");
  const [enableLockedSnapshot, setEnableLockedSnapshot] = useState(false);
  const [enablePolicy, setEnablePolicy] = useState(true);
  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };
  const handleCheckboxChange = (day: string) => {
    setSelectedDays((prev) => {
      const updatedDays = new Set(prev);
      if (updatedDays.has(day)) {
        updatedDays.delete(day);
      } else {
        updatedDays.add(day);
      }
      return updatedDays;
    });
  };
  const handleRadioChangeDeleteSnapshot = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedOptionDeleteSnapshot(event.target.value);
  };
  /** On click of button how to handle Snapshot Policy */
  const handleSavePolicy = async () => {
    try {
      const postData = {
        policyName: policyName,
        applyToDirectory: applyToDirectory,
        selectedOption: selectedOption,
        time: time,
        selectedDays: selectedDays,
        selectedOptionDeleteSnapshot: selectedOptionDeleteSnapshot,
        enableLockedSnapshot: enableLockedSnapshot,
        enablePolicy: enablePolicy,
      };
      const res = await axios.post(
        "http://localhost:3333/savePolicySchedule",
        postData
      );
      if (res && res.data) {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 style={{ fontSize: 24 }}>Edit Snapshot Policy</h1>
      <div className="mb-4 mt-2">
        <label
          htmlFor="inputField"
          className="block text-lg font-medium text-gray-300 mb-2"
        >
          Policy Name
        </label>
        <input
          type="text"
          id="inputField"
          name="inputField"
          value={policyName}
          onChange={(e) => setPolicyName(e.target.value)}
          className="w-full border border-gray-600 bg-gray-900 text-gray-100 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your text here"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="inputField"
          className="block text-lg font-medium text-gray-300 mb-2"
        >
          Apply to Directory
        </label>
        <input
          type="text"
          id="inputField"
          name="inputField"
          value={applyToDirectory}
          onChange={(e) => setApplyToDirectory(e.target.value)}
          className="w-full border border-gray-600 bg-gray-900 text-gray-100 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your text here"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="inputField"
          className="block text-lg font-medium text-gray-300 mb-2"
        >
          Apply to Directory
        </label>
      </div>
      <div
        className="container mx-auto p-4 text-gray-100 rounded-lg shadow-lg"
        style={{ backgroundColor: "#242C35" }}
      >
        <div className="mb-9">
          <div className="flex items-center space-x-12">
            <label
              htmlFor="dropdown"
              style={{ width: 300, textAlign: "right" }}
              className="block text-sm font-medium mb-2"
            >
              Select Schedule Type
            </label>
            <select
              id="dropdown"
              style={{ width: 300 }}
              value={selectedOption}
              onChange={handleDropdownChange}
              className="w-full bg-gray-800 border border-gray-600 text-gray-100 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Option 1">Daily or Weekly</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="mb-9">
          <div className="flex items-center space-x-12">
            <label
              htmlFor="dropdown"
              style={{ width: 300, textAlign: "right" }}
              className="block text-sm font-medium mb-2"
            >
              Set to Time Zone
            </label>
            <label
              htmlFor="dropdown"
              style={{ width: 300, textAlign: "left" }}
              className="block text-sm font-medium mb-2"
            >
              America/Los Angeles
            </label>
          </div>
        </div>
        <div className="mb-9">
          <div className="flex items-center space-x-12">
            <label
              htmlFor="dropdown"
              style={{ width: 300, textAlign: "right" }}
              className="block text-sm font-medium mb-2"
            >
              Take a Snapshot at
            </label>
            <input
              type="time"
              id="time"
              style={{ width: 150 }}
              value={time}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-600 text-gray-100 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mb-9">
          <div className="flex items-center space-x-12">
            <label
              htmlFor="dropdown"
              style={{ width: 300, textAlign: "right" }}
              className="block text-sm font-medium mb-2"
            >
              On the Following Day(s)
            </label>
            <div className="flex space-x-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={day}
                    checked={selectedDays.has(day)}
                    onChange={() => handleCheckboxChange(day)}
                    className="form-checkbox h-4 w-4 text-blue-600 border-gray-600 rounded"
                  />
                  <label
                    htmlFor={day}
                    className="text-sm font-medium text-gray-300"
                  >
                    {day}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-9">
          <div className="flex items-center space-x-12">
            <label
              htmlFor="dropdown"
              style={{ width: 300, textAlign: "right" }}
              className="block text-sm font-medium mb-2"
            >
              Delete Each Snapshot
            </label>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="never"
                  name="option"
                  value="never"
                  checked={selectedOptionDeleteSnapshot === "never"}
                  onChange={handleRadioChangeDeleteSnapshot}
                  className="form-radio h-4 w-4 text-blue-600 border-gray-600"
                />
                <label
                  htmlFor="never"
                  className="text-sm font-medium text-gray-300"
                >
                  Never
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="after-99-days"
                  name="option"
                  value="after-99-days"
                  checked={selectedOptionDeleteSnapshot === "after-99-days"}
                  onChange={handleRadioChangeDeleteSnapshot}
                  className="form-radio h-4 w-4 text-blue-600 border-gray-600"
                />
                <label
                  htmlFor="after-99-days"
                  className="text-sm font-medium text-gray-300"
                >
                  Automatically After 99 Days
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-300 mb-2">
          Snapshot Locking
        </label>
        <label className="block text-xs font-small text-gray-300 mb-2">
          {lockedSnapshot}
        </label>
      </div>
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="enableLockedSnapshot"
            checked={enableLockedSnapshot}
            disabled={true}
            onChange={() => setEnableLockedSnapshot}
            className="form-checkbox h-4 w-4 text-blue-600 border-gray-600 rounded"
          />
          <label
            htmlFor="enableLockedSnapshot"
            className="text-sm font-medium text-gray-300"
          >
            Enable locked snapshots
          </label>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="enablePolicy"
            checked={enablePolicy}
            disabled={true}
            onChange={() => setEnablePolicy}
            className="form-checkbox h-4 w-4 text-blue-600 border-gray-600 rounded"
          />
          <label
            htmlFor="enablePolicy"
            className="text-sm font-medium text-gray-300"
            style={{ color: "#656B73" }}
          >
            Enable policy
          </label>
        </div>
      </div>
      <div className="flex mt-6 space-x-2">
        <button
          onClick={handleSavePolicy}
          className="w-200 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Policy
        </button>
        <button className="w-200 bg-white-600 text-blue py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditSnapshotPolicy;
