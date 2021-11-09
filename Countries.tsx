import React, { Component } from 'react';
import Info from './Info';

class Countries extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      listLanguages: ['en', 'it'],
      rows: [{ id: '2', country: 'Jacarta', code: 'jk' }],
    };
  }

  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h4 class="title">
              {this.l('Shipping Countries or States or Regions')}
            </h4>
          </div>
          <div class="add_new_top">
            <form action="#" method="post">
              <input type="hidden" name="id" value="0" />

              <div class="col-md-2">
                <label>
                  {' '}
                  {this.l('Title')} <br />
                  <input type="text" name="country" class="form-control" />
                </label>
              </div>
              <div class="col-md-2">
                <label>
                  {this.l('Code')}
                  <br />
                  <input type="text" name="code" class="form-control" />
                </label>
              </div>
              <div class="col-md-1">
                <br />
                <button type="submit" class="btn btn_small">
                  {this.l('Add new one')}
                </button>
              </div>

              <div class="clear"></div>
            </form>
          </div>

          <form action="#" method="post">
            <div class="col-md-2">
              <select name="action" class="form-control">
                <option value="">{this.l('Action')}</option>
                <option value="del"> {this.l('Remove')} </option>
              </select>
            </div>

            <div class="col-md-1">
              <button type="submit" class="btn btn_small">
                {this.l('Apply')}
              </button>
            </div>

            <div class="clear"></div>

            <div class="content table-responsive table-full-width">
              <table class="table table-hover table-striped">
                <thead>
                  <th>
                    <input
                      type="checkbox"
                      id="checkall"
                      onclick="check_all(this);"
                    />
                  </th>
                  <th>{this.l('ID')}</th>
                  <th>{this.l('Title')} </th>
                  <th>{this.l('Code')}</th>
                  <th style={{ width: '40px' }}> </th>
                  <th style={{ width: '40px' }}> </th>
                </thead>
                <tbody>
                  {this.state.rows.map((row) => (
                    <tr>
                      <td>
                        <input type="hidden" name="id" />
                        <input type="hidden" name="returndata" value="ok" />
                        <input
                          type="checkbox"
                          name="bulkid"
                          class="checkboxeach"
                        />
                      </td>
                      <td>{row.id}</td>
                      <td>
                        <input type="text" name="country" />
                      </td>
                      <td>
                        <input type="text" name="code" />
                      </td>
                      <td>
                        <a href="#" class="fa_delete">
                          {''}
                        </a>
                      </td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Countries;
