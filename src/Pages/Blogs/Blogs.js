import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div id="question-answer" className="text-center blogs-page container">
            <h4 className='mb-3'>Difference between Authorization and Authentication</h4>
            <center>
                <table>
                    <tr>
                        <th className='text-center'>Authorization</th>
                        <th className='text-center'>Authentication</th>
                    </tr>
                    <tr>
                        <td>1. Authorization is process of checking whether the user has access rights to the system.</td>
                        <td>1. Authentication is the process of
                            verifying the identity of a user.</td>
                    </tr>
                    <tr>
                        <td>2. As an example, once we know the user is valid, then we determined to which pages the user has access to. Normal users should not be able to access admin pages. This is authorization part.</td>
                        <td>2. As an example suppose, we have two types of users normal and admins to a website. When the user tries to access the website, we ask them to log in. This is authentication part.</td>
                    </tr>
                    <tr>
                        <td>3. It takes place after authentication.</td>
                        <td>3. It always precedes to authorization, event if our application lets anonymous users connect and use the application, it still authenticates them as anonymous.</td>
                    </tr>
                </table>
            </center>
            <hr />
            <h4 className='mb-3'>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Google Firebase offers many features that present it as a back-end development tool for web and mobile applications. This reduces stress and development work time. And it is a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industry-recognized. That's why I use Google FIrebase.</p>
            <p>The other options I have to implement authentication are Phone, Anonymous, Game Center, Microsoft, Facebook, Apple, Twitter, Play Games, and Yahoo.</p>
            <hr />
            <h4 className='mb-3'>What other services does firebase provide other than authentication</h4>
            <center>
                <table>
                    <tr>
                        <th className='text-center'>Incredibly Build-In Analytics</th>
                        <th className='text-center'>App Development Mode easy</th>
                        <th className='text-center'>Growth and User Engagement</th>
                    </tr>
                    <tr>
                        <td>1. Unlimited Reporting.</td>
                        <td>1. Audience Segmentation.</td>
                        <td>1. Integration with other Services.</td>
                    </tr>
                    <tr>
                        <td>2. Cloud Messaging, Real-time Database.</td>
                        <td>2. Hosting, Remote Configuration.</td>
                        <td>2. Dynamic Links, Crash Reporting.</td>
                    </tr>
                    <tr>
                        <td>3. Adwords.</td>
                        <td>3. App Indexing.</td>
                        <td>3. Notification, Invites.</td>
                    </tr>
                </table>
            </center>
        </div>
    );
};

export default Blogs;