import React, { Component } from 'react';
import Info from './Info';

class Comments extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      listLanguages: ['en', 'it'],
      rows: [
        {
          commentsid: '2',
          status: '2',
          userid: '2',
          firstName: 'Newton',
          lastName: 'A.',
          email: 'email@gmail.com',
          commentAuthorEmail: '',
          commentAuthor: '',
          stars: '3',
          commentAthorIp: '1.1.1.1',
          productid: '1',
          productTitle: '',
          created_at: '12.12.2021',
          comment: 'aa as ad as d as f as f',
        },
      ],
    };
  }

  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <div class="header">
            <h4 class="title">{this.l('Comments/Reviews')}</h4>
          </div>

          <form action="${baseurl}admin/comments-bulk" method="post">
            <div class="col-md-2">
              <select name="action" class="form-control">
                <option value="">{this.l('Action')}</option>
                <option value="del">{this.l('Remove')} </option>
                <option value="1">{this.l('Aprove')} </option>
                <option value="2">{this.l('Inaprove')} </option>
              </select>
            </div>

            <div class="col-md-1">
              <button type="submit" class="btn btn_small">
                {this.l('Apply')}
              </button>
            </div>
            <div class="col-md-1">
              <br />
            </div>
            <div class="col-md-3 text_align_right">
              <select
                class="form-control"
                onchange="if (this.value) window.location.href=this.value"
              >
                <option value="${baseurl}admin/comments"> All</option>
                <option value="${baseurl}admin/comments?status=2">
                  {this.l('Inaproved')}
                </option>
                <option value="${baseurl}admin/comments?status=1">
                  {this.l('Aproved')}{' '}
                </option>
              </select>
            </div>
            <div class="col-md-1">
              <br />
            </div>
            <div class="col-md-2">
              <input
                type="text"
                class="form-control"
                name="s"
                value=""
                placeholder={this.l('Search')}
              />
            </div>
            <div class="col-md-2">
              <button type="submit" class="btn btn_small">
                {this.l('Search')}
              </button>
            </div>

            <div class="clear"></div>

            <div class="content table-responsive table-full-width">
              <table class="table table-hover table-striped">
                <thead>
                  <th>
                    <input type="checkbox" id="checkall" />
                  </th>
                  <th>{this.l('Status')}</th>

                  <th>{this.l('Author')}</th>
                  <th>{this.l('IP')}</th>
                  <th>{this.l('Comment')}</th>

                  <th>{this.l('Product')}</th>
                  <th>{this.l('Date')}</th>
                  <th style={{ width: '40px' }}> </th>
                </thead>
                <tbody>
                  {this.state.rows.map((row) => (
                    <tr>
                      <td>
                        {' '}
                        <input
                          type="checkbox"
                          name="bulkid"
                          class="checkboxeach"
                          value={row.commentsid}
                        />
                      </td>
                      <td>
                        {' '}
                        {row.status == 2 ? (
                          <>{this.l('Inaproved')}</>
                        ) : (
                          <>{this.l('Aproved')}</>
                        )}{' '}
                      </td>

                      <td>
                        {row.userid != null ? (
                          <a href={row.userid}>
                            <b>
                              {row.firstName} {row.lastName}
                            </b>
                            ( {row.email} )
                          </a>
                        ) : (
                          <b>
                            {row.commentAuthor} | {row.commentAuthorEmail}
                          </b>
                        )}

                        <span class={'stars' + row.stars}></span>
                      </td>
                      <td> {row.commentAthorIp}</td>
                      <td style={{ maxWidth: '600px' }}> {row.comment} </td>
                      <td>
                        <a href={row.productid}>{row.productTitle}</a>
                      </td>
                      <td> {row.created_at}</td>
                      <td>
                        <a
                          href="#"
                          class="fa_delete"
                          onclick="return confirm('You are sure?') ? true : false;"
                        >
                          {' '}
                        </a>
                      </td>
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

export default Comments;
