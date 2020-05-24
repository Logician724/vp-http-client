import React, { Component } from 'react';
import HTTPEditor from './components/HTTPEditor';
import HTTPButton from './components/HTTPButton';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    requests: [],
    responses: [],
  };
  handleButtonClick = (type) => {
    this.setState((prevState) =>
      type === 'GET'
        ? {
            requests: [
              ...prevState.requests,
              {
                type,
                url: '',
              },
            ],
          }
        : {
            requests: [
              ...prevState.requests,
              {
                type,
                url: '',
                body: '',
              },
            ],
          }
    );
  };

  handleURLChange = (event, index) => {
    const requests = [...this.state.requests];
    const newRequest = { ...requests[index], url: event.target.value };
    requests[index] = newRequest;
    this.setState({ requests });
  };
  sendRequests = async () => {
    console.log('sending requests');
    let responses = [];
    for (const request of this.state.requests) {
      try {
        let response = null;
        switch (request.type) {
          case 'GET':
            response = await axios.get(request.url);
            break;
          case 'POST':
          case 'PUT':
          case 'DELETE':
            response = await axios.put(
              request.url,
              request.body ? request.body : {}
            );
            break;
          default:
            console.error('Unsupported request type');
        }
        responses.push(response);
      } catch (err) {
        responses.push(err);
      }
    }
    this.setState({ responses: [...this.state.responses, ...responses] });
  };
  render = () => (
    <div className="container-fluid p-0 w-100 h-100">
      <div className="row no-gutters w-100 h-100">
        <div className="col-xs-12 col-lg-2 mt-auto mb-auto">
          <div className="row ml-3">
            <HTTPButton
              type="GET"
              clickHandler={this.handleButtonClick}
            ></HTTPButton>
            <HTTPButton
              type="POST"
              clickHandler={this.handleButtonClick}
            ></HTTPButton>
            <HTTPButton
              type="PUT"
              clickHandler={this.handleButtonClick}
            ></HTTPButton>
            <HTTPButton
              type="DELETE"
              clickHandler={this.handleButtonClick}
            ></HTTPButton>
          </div>
        </div>

        <div className="HTTPEditors-container">
          <div className="m-3 w-100">
            {this.state.requests.map((request, index) => (
              <HTTPEditor
                key={index}
                id={index}
                type={request.type}
                url={request.url}
                body={request.body}
                URLChangeHandler={this.handleURLChange}
              ></HTTPEditor>
            ))}
          </div>
        </div>
        <div className="col-xs-12 col-lg-4 bg-dark">
          <div className="d-flex flex-column">
            <button
              className="m-auto btn btn-primary"
              onClick={this.sendRequests}
            >
              Send Requests
            </button>
            <div class="response-container">
              <div className="mb-3">
                {this.state.responses.map((response, index) => (
                  <div
                    className="text-wrap text-break text-success"
                    key={index}
                  >
                    {JSON.stringify(response)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
