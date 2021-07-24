var express = require('express');
var router = express.Router();

var Medication = require('../model/medication');
var Allergy = require('../model/allergy');
var Background = require('../model/healthbackground');
var Report = require("../model/report");
var UserTemplate = require("../model/user-template")
var authenticate = require('../authenticate')

router.use(express.json());

/* GET users listing. */

router.post('/addmedication', authenticate.verifyUser, (req, res, next) => {
    Medication.create({
        p_id: req.user._id,
        drug: req.body.drug
    })
        .then((result) => {
            console.log("Medicine has been added", result);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(result)
            console.log(result)
        }, (err) => next(err)

        ).catch((err) => {
            res.statusCode = 404;
            res.json({ err: err, success: false })
        })

})
router.post('/savereports', authenticate.verifyUser, (req, res, next) => {
    console.log(req.body)
    Report.create({
        p_id: req.user._id,
        name: req.body.name,
        cancer: req.body.cancer,
        age: req.body.age,
        time: req.body.time,
        reportID: req.body.reportID,
        gender: req.body.gender
    })
        .then((result) => {
            console.log("Reports has been added", result);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(result)
            console.log(result)
        }, (err) => next(err)

        ).catch((err) => {
            res.statusCode = 404;
            res.json({ err: err, success: false })
        })

})

router.post('/basicinfo', authenticate.verifyUser, (req, res, next) => {
    console.log(req.user._id)
  console.log(req.body)
  UserTemplate.findById(req.user._id, (err, user) => {
    console.log(req.user._id)
    console.log("----------------finded-----------------------------")
    if (err)
      res.json({
        success: false,
        message: err
      })
    else if (user) {
        console.log("----------------adding data-----------------------------")
 
      user.age = req.body.age;
      user.gender = req.body.gender;
      user.save((err) => {
        if (err) {
          res.json({
            success: false,
            message: err.name
          })
        }
        else {
          res.json({
            success: true,
            message: 'Age Updated Successffully'
          })
        }
      })
    } else {
      res.json({
        success: false,
        message: 'User not found'
      }); // Return error, user was not found in db
    }
  })
})


router.post('/personalinfo', authenticate.verifyUser, (req, res, next) => {
 console.log(req.user._id)
  console.log(req.body)
  UserTemplate.findById(req.user._id, (err, user) => {
    if (err)
      res.json({
        success: false,
        message: err
      })
    else if (user) {
      user.height = req.body.height;
      user.weight = req.body.weight;
      user.save((err) => {
        if (err) {
          res.json({
            success: false,
            message: err.name
          })
        }
        else {
          res.json({
            success: true,
            message: 'Age Updated Successffully'
          })
        }
      })
    } else {
      res.json({
        success: false,
        message: 'User not found'
      }); // Return error, user was not found in db
    }
  })
})



router.post('/allergy', authenticate.verifyUser, (req, res, next) => {
    Allergy.updateOne({
        p_id: req.user._id,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
    })
        .then((result) => {
            console.log("Allergy Info has been added", result);
            if (result.n === 0) {
                Allergy.create({
                    p_id: req.user._id,
                    q1: req.body.q1,
                    q2: req.body.q2,
                    q3: req.body.q3,
                    q4: req.body.q4,
                    q5: req.body.q5,
                })
                    .then((result) => {
                        console.log("Allergy Info has been added", result);
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "application/json")
                        res.json(result)
                        console.log(result)
                    }, (err) => next(err)

                    ).catch((err) => {
                        res.statusCode = 404;
                        res.json({ err: err, success: false })
                    })

            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json")
                res.json(result)
                console.log(result)
            }
        }, (err) => next(err)

        ).catch((err) => {
            res.statusCode = 404;
            res.json({ err: err, success: false })
        })

})

// router.post('/background', authenticate.verifyUser, (req, res, next) => {
//     Background.updateOne({
//         p_id: req.user._id,
//         q1: req.body.q1,
//         q2: req.body.q2,
//         q3: req.body.q3,
//         q4: req.body.q4,
//         q5: req.body.q5,
//     })
//         .then((result) => {
//             console.log("Background Info has been added", result);
//             if(result.n === 0 ){
//                 Background.create({
//                     p_id: req.user._id,
//                     q1: req.body.q1,
//                     q2: req.body.q2,
//                     q3: req.body.q3,
//                     q4: req.body.q4,
//                     q5: req.body.q5,
//                 })
//                     .then((result) => {
//                         console.log("Background Info has been added", result);
//                         res.statusCode = 200;
//                         res.setHeader("Content-Type", "application/json")
//                         res.json(result)
//                         console.log(result)
//                     }, (err) => next(err)

//                     ).catch((err) => {
//                         res.statusCode = 404;
//                         res.json({ err: err, success: false })
//                     })
//             }else{
//             res.statusCode = 200;
//             res.setHeader("Content-Type", "application/json")
//             res.json(result)
//             console.log(result)
//         }}, (err) => next(err)

//         ).catch((err) => {
//             res.statusCode = 404;
//             res.json({ err: err, success: false })
//         })

// })

module.exports = router;