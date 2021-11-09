import React, { Component } from 'react';
import Info from './Info';

class Contactform extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      listLanguages: ['en', 'it'],
      rows: [{ id: '1', value: 'contact page' }],
    };
  }

  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h4 class="title">{this.l('Contact Forms')}</h4>
          </div>

          <div class="add_new_top">
            <form action="#" method="post">
              <div class="col-md-2">
                <label>
                  {' '}
                  {this.l('Form name')} <br />
                  <input
                    type="text"
                    name="value"
                    required=""
                    class="form-control"
                  />
                </label>
              </div>

              <div class="col-md-1">
                <br />
                <button type="submit" class="btn btn_small">
                  {this.l('Add New')}{' '}
                </button>
              </div>

              <div class="clear"></div>
            </form>
          </div>

          <div class="content table-responsive table-full-width">
            <table class="table table-hover table-striped">
              <thead>
                <th>ID</th>
                <th>{this.l('Form Title')}</th>
                <th>{this.l('Use Form in page')}</th>
                <th style={{ width: '40px' }}> </th>
                <th style={{ width: '40px' }}> </th>
              </thead>
              <tbody>
                {this.state.rows.map((row) => (
                  <tr>
                    <td>{row.id}</td>
                    <td>
                      <a href="#">{row.value}</a>
                    </td>

                    <td>[form id={row.id}]</td>
                    <td>
                      <a href="{row.id}" class="fa_edit small">
                        {' '}
                      </a>
                    </td>
                    <td>
                      <a
                        href="{row.id}"
                        class="fa_delete"
                        onclick="return confirm('You are sure?') ? true : false;"
                      >
                        {' '}
                      </a>
                    </td>
                    <td class={'result' + row.id}></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Contactform;
