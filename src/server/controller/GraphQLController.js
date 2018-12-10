import request from "request-promise";
import { parseString } from "xml2js";

export default {
    
    getBooks: (query, page, key) => {
        var finalData = {};
        var url = `https://www.goodreads.com/search/index.xml?key=${key}&q=${query}&page=${page}`;
    
        return new Promise((resolve, reject) => {
            request.get(
                url
            ).then(result =>
                parseString(result, (err, goodreadsResult) => {
                    if (err) {
                        reject(err);
                    } else {
                        if(goodreadsResult.GoodreadsResponse.search[0].results[0].work) {
                            finalData.total = goodreadsResult.GoodreadsResponse.search[0]["total-results"][0];
                            finalData.start = goodreadsResult.GoodreadsResponse.search[0]["total-results"][0];
                            finalData.end = goodreadsResult.GoodreadsResponse.search[0]["total-results"][0];
                            finalData.books = [];
                            goodreadsResult.GoodreadsResponse.search[0].results[0].work.map(
                                work => {
                                    finalData.books.push({
                                        id: work.best_book[0].id[0]._,
                                        name: work.best_book[0].title[0],
                                        author: work.best_book[0].author[0].name[0],
                                        rating: work.average_rating[0],
                                        reviews: work.text_reviews_count[0]._,
                                        cover: work.best_book[0].image_url[0]
                                    })
                                }
                            )
                        } else {
                            finalData.total = goodreadsResult.GoodreadsResponse.search[0]["total-results"][0];
                            finalData.start = goodreadsResult.GoodreadsResponse.search[0]["total-results"][0];
                            finalData.end = goodreadsResult.GoodreadsResponse.search[0]["total-results"][0];
                            finalData.books = [];
                        }
    
                        resolve(finalData);
                    }
                })
            ).catch((error) => {
                reject(error);
            });
        });
    },

    getBookById: (id, key) => {
        var finalData = {};
        var url = `https://www.goodreads.com/book/show/${id}.xml?key=${key}`;

        return new Promise((resolve, reject) => {
            request.get(
                url
            ).then(result =>
                parseString(result, (err, goodreadsResult) => {
                    if (err) {
                        reject(err);
                    } else {
                        if(goodreadsResult.GoodreadsResponse.book[0].id) {
                            let bookxml = goodreadsResult.GoodreadsResponse.book[0];
                            if(bookxml["country_code"]) {
                                finalData.cc = bookxml["country_code"][0];
                            } else {
                                finalData.cc = "";
                            }
                            if(bookxml.description) {
                                finalData.description = bookxml.description[0];
                            } else {
                                finalData.description = "";
                            }
                            if(bookxml["publication_year"]) {
                                finalData.py = bookxml["publication_year"][0];
                            } else {
                                finalData.py = "";
                            }
                        }
    
                        resolve(finalData);
                    }
                })
            ).catch((error) => {
                reject(error);
            });
        });
    }
}